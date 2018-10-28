import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDragIndicatorElement
 * @class IconSharpDragIndicatorElement
 * @extends {AoflElement}
 */
class IconSharpDragIndicatorElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDragIndicatorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-drag-indicator';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDragIndicatorElement.is, IconSharpDragIndicatorElement);

export default IconSharpDragIndicatorElement;
