import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHighlightOffElement
 * @class IconBaselineHighlightOffElement
 * @extends {AoflElement}
 */
class IconBaselineHighlightOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHighlightOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-highlight-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHighlightOffElement.is, IconBaselineHighlightOffElement);

export default IconBaselineHighlightOffElement;
