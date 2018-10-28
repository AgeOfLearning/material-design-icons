import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCallMadeElement
 * @class IconBaselineCallMadeElement
 * @extends {AoflElement}
 */
class IconBaselineCallMadeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCallMadeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-call-made';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCallMadeElement.is, IconBaselineCallMadeElement);

export default IconBaselineCallMadeElement;
