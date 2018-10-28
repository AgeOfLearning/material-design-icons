import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStopElement
 * @class IconBaselineStopElement
 * @extends {AoflElement}
 */
class IconBaselineStopElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-stop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStopElement.is, IconBaselineStopElement);

export default IconBaselineStopElement;
