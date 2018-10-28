import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEventAvailableElement
 * @class IconBaselineEventAvailableElement
 * @extends {AoflElement}
 */
class IconBaselineEventAvailableElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEventAvailableElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-event-available';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEventAvailableElement.is, IconBaselineEventAvailableElement);

export default IconBaselineEventAvailableElement;
