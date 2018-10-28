import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTextRotateUpElement
 * @class IconBaselineTextRotateUpElement
 * @extends {AoflElement}
 */
class IconBaselineTextRotateUpElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTextRotateUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-text-rotate-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTextRotateUpElement.is, IconBaselineTextRotateUpElement);

export default IconBaselineTextRotateUpElement;
