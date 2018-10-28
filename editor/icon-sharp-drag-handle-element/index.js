import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDragHandleElement
 * @class IconSharpDragHandleElement
 * @extends {AoflElement}
 */
class IconSharpDragHandleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDragHandleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-drag-handle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDragHandleElement.is, IconSharpDragHandleElement);

export default IconSharpDragHandleElement;
