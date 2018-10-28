import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCallElement
 * @class IconBaselineCallElement
 * @extends {AoflElement}
 */
class IconBaselineCallElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCallElement.is, IconBaselineCallElement);

export default IconBaselineCallElement;
