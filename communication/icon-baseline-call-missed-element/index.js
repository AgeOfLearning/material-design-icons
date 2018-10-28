import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCallMissedElement
 * @class IconBaselineCallMissedElement
 * @extends {AoflElement}
 */
class IconBaselineCallMissedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCallMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-call-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCallMissedElement.is, IconBaselineCallMissedElement);

export default IconBaselineCallMissedElement;
