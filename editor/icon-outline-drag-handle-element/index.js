import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDragHandleElement
 * @class IconOutlineDragHandleElement
 * @extends {AoflElement}
 */
class IconOutlineDragHandleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDragHandleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-drag-handle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDragHandleElement.is, IconOutlineDragHandleElement);

export default IconOutlineDragHandleElement;
