import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDragIndicatorElement
 * @class IconRoundDragIndicatorElement
 * @extends {AoflElement}
 */
class IconRoundDragIndicatorElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDragIndicatorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-drag-indicator';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDragIndicatorElement.is, IconRoundDragIndicatorElement);

export default IconRoundDragIndicatorElement;
