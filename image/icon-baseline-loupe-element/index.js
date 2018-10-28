import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLoupeElement
 * @class IconBaselineLoupeElement
 * @extends {AoflElement}
 */
class IconBaselineLoupeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLoupeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-loupe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLoupeElement.is, IconBaselineLoupeElement);

export default IconBaselineLoupeElement;
