import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCallToActionElement
 * @class IconBaselineCallToActionElement
 * @extends {AoflElement}
 */
class IconBaselineCallToActionElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCallToActionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-call-to-action';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCallToActionElement.is, IconBaselineCallToActionElement);

export default IconBaselineCallToActionElement;
