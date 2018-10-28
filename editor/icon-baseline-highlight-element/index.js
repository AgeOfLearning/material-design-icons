import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHighlightElement
 * @class IconBaselineHighlightElement
 * @extends {AoflElement}
 */
class IconBaselineHighlightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHighlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-highlight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHighlightElement.is, IconBaselineHighlightElement);

export default IconBaselineHighlightElement;
