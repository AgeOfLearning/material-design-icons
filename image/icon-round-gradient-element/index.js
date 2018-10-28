import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGradientElement
 * @class IconRoundGradientElement
 * @extends {AoflElement}
 */
class IconRoundGradientElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGradientElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-gradient';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGradientElement.is, IconRoundGradientElement);

export default IconRoundGradientElement;
