import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDragHandleElement
 * @class IconRoundDragHandleElement
 * @extends {AoflElement}
 */
class IconRoundDragHandleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDragHandleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-drag-handle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDragHandleElement.is, IconRoundDragHandleElement);

export default IconRoundDragHandleElement;
