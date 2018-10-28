import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEventElement
 * @class IconBaselineEventElement
 * @extends {AoflElement}
 */
class IconBaselineEventElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEventElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-event';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEventElement.is, IconBaselineEventElement);

export default IconBaselineEventElement;
