import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDragIndicatorElement
 * @class IconBaselineDragIndicatorElement
 * @extends {AoflElement}
 */
class IconBaselineDragIndicatorElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDragIndicatorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-drag-indicator';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDragIndicatorElement.is, IconBaselineDragIndicatorElement);

export default IconBaselineDragIndicatorElement;
