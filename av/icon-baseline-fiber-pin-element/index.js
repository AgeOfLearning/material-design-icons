import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFiberPinElement
 * @class IconBaselineFiberPinElement
 * @extends {AoflElement}
 */
class IconBaselineFiberPinElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFiberPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fiber-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFiberPinElement.is, IconBaselineFiberPinElement);

export default IconBaselineFiberPinElement;
