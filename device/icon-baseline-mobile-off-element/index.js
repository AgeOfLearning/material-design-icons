import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMobileOffElement
 * @class IconBaselineMobileOffElement
 * @extends {AoflElement}
 */
class IconBaselineMobileOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMobileOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mobile-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMobileOffElement.is, IconBaselineMobileOffElement);

export default IconBaselineMobileOffElement;
