import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDragHandleElement
 * @class IconTwotoneDragHandleElement
 * @extends {AoflElement}
 */
class IconTwotoneDragHandleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDragHandleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-drag-handle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDragHandleElement.is, IconTwotoneDragHandleElement);

export default IconTwotoneDragHandleElement;
