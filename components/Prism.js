'use client'

import { useEffect, useRef } from 'react'

export default function Prism() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const canvas = canvasRef.current
    if (!canvas) return

    let animationId
    let renderer, gl, scene, camera, mesh

    const initOGL = async () => {
      const OGL = await import('ogl')
      const { Renderer, Camera, Transform, Program, Mesh, Box, Vec3 } = OGL

      renderer = new Renderer({ canvas, alpha: true, antialias: true })
      gl = renderer.gl
      gl.clearColor(0, 0, 0, 0)

      camera = new Camera(gl, { fov: 35 })
      camera.position.set(0, 0, 8)

      scene = new Transform()

      const geometry = new Box(gl, {
        width: 1.5,
        height: 1.5,
        depth: 1.5,
      })

      const vertex = `
        attribute vec3 position;
        attribute vec3 normal;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform mat3 normalMatrix;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `

      const fragment = `
        precision highp float;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float uTime;
        void main() {
          vec3 color1 = vec3(0.23, 0.51, 0.96);
          vec3 color2 = vec3(0.55, 0.36, 0.92);
          vec3 color3 = vec3(0.4, 0.8, 0.95);
          
          float pattern = sin(vPosition.x * 3.0 + uTime) * cos(vPosition.y * 3.0 + uTime) * 0.5 + 0.5;
          vec3 color = mix(mix(color1, color2, pattern), color3, vNormal.z * 0.5 + 0.5);
          
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          color += fresnel * 0.3;
          
          gl_FragColor = vec4(color, 0.15);
        }
      `

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
        },
        transparent: true,
      })

      mesh = new Mesh(gl, { geometry, program })
      mesh.setParent(scene)

      resize()
      window.addEventListener('resize', resize)
      requestAnimationFrame(animate)
    }

    function resize() {
      if (!renderer || !camera) return
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.perspective({ aspect: window.innerWidth / window.innerHeight })
    }

    function animate(t) {
      animationId = requestAnimationFrame(animate)
      if (!mesh || !renderer || !camera || !scene) return

      mesh.rotation.y -= 0.002
      mesh.rotation.x -= 0.001
      mesh.program.uniforms.uTime.value = t * 0.001

      renderer.render({ scene, camera })
    }

    initOGL()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  )
}
