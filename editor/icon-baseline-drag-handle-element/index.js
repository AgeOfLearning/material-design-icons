import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDragHandleElement
 * @class IconBaselineDragHandleElement
 * @extends {AoflElement}
 */
class IconBaselineDragHandleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDragHandleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-drag-handle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDragHandleElement.is, IconBaselineDragHandleElement);

export default IconBaselineDragHandleElement;
