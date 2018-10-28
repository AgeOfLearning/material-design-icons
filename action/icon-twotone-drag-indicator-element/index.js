import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDragIndicatorElement
 * @class IconTwotoneDragIndicatorElement
 * @extends {AoflElement}
 */
class IconTwotoneDragIndicatorElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDragIndicatorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-drag-indicator';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDragIndicatorElement.is, IconTwotoneDragIndicatorElement);

export default IconTwotoneDragIndicatorElement;
