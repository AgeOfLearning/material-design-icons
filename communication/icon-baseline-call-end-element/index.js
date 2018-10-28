import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCallEndElement
 * @class IconBaselineCallEndElement
 * @extends {AoflElement}
 */
class IconBaselineCallEndElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCallEndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-call-end';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCallEndElement.is, IconBaselineCallEndElement);

export default IconBaselineCallEndElement;
