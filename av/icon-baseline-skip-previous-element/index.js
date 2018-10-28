import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSkipPreviousElement
 * @class IconBaselineSkipPreviousElement
 * @extends {AoflElement}
 */
class IconBaselineSkipPreviousElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSkipPreviousElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-skip-previous';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSkipPreviousElement.is, IconBaselineSkipPreviousElement);

export default IconBaselineSkipPreviousElement;
