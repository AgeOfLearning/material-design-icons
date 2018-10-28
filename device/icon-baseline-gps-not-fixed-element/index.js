import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGpsNotFixedElement
 * @class IconBaselineGpsNotFixedElement
 * @extends {AoflElement}
 */
class IconBaselineGpsNotFixedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGpsNotFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-gps-not-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGpsNotFixedElement.is, IconBaselineGpsNotFixedElement);

export default IconBaselineGpsNotFixedElement;
