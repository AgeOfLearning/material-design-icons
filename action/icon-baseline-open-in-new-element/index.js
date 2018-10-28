import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineOpenInNewElement
 * @class IconBaselineOpenInNewElement
 * @extends {AoflElement}
 */
class IconBaselineOpenInNewElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineOpenInNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-open-in-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineOpenInNewElement.is, IconBaselineOpenInNewElement);

export default IconBaselineOpenInNewElement;
