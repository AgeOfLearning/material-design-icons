import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBookElement
 * @class IconBaselineBookElement
 * @extends {AoflElement}
 */
class IconBaselineBookElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-book';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBookElement.is, IconBaselineBookElement);

export default IconBaselineBookElement;
