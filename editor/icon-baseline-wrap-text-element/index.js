import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWrapTextElement
 * @class IconBaselineWrapTextElement
 * @extends {AoflElement}
 */
class IconBaselineWrapTextElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWrapTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wrap-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWrapTextElement.is, IconBaselineWrapTextElement);

export default IconBaselineWrapTextElement;
