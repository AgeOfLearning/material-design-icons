import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHearingElement
 * @class IconBaselineHearingElement
 * @extends {AoflElement}
 */
class IconBaselineHearingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHearingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hearing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHearingElement.is, IconBaselineHearingElement);

export default IconBaselineHearingElement;
