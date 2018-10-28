import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineErrorElement
 * @class IconBaselineErrorElement
 * @extends {AoflElement}
 */
class IconBaselineErrorElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineErrorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-error';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineErrorElement.is, IconBaselineErrorElement);

export default IconBaselineErrorElement;
