import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePinDropElement
 * @class IconBaselinePinDropElement
 * @extends {AoflElement}
 */
class IconBaselinePinDropElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePinDropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pin-drop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePinDropElement.is, IconBaselinePinDropElement);

export default IconBaselinePinDropElement;
