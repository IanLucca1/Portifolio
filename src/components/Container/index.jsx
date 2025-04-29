import styles from '../Container'
import PropTypes from 'prop-types'
function Container({children})
{
    return(
          <section className={styles.container}>
            {children}
          </section>

    )
}
Container.prototype={

    children: PropTypes.any
}.isRequired
export default Container