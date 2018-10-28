import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGavelElement
 * @class IconRoundGavelElement
 * @extends {AoflElement}
 */
class IconRoundGavelElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGavelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-gavel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGavelElement.is, IconRoundGavelElement);

export default IconRoundGavelElement;
