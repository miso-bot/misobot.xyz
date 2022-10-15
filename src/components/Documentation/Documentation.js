const Documentation = ({ cogs }) => (
  <main>
    <h2>TODO</h2>
    <pre>{JSON.stringify(cogs, null, 2)}</pre>
  </main>
)

export default Documentation
