import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDragIndicatorElement
 * @class IconOutlineDragIndicatorElement
 * @extends {AoflElement}
 */
class IconOutlineDragIndicatorElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDragIndicatorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-drag-indicator';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDragIndicatorElement.is, IconOutlineDragIndicatorElement);

export default IconOutlineDragIndicatorElement;
