import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineUnfoldMoreElement
 * @class IconBaselineUnfoldMoreElement
 * @extends {AoflElement}
 */
class IconBaselineUnfoldMoreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineUnfoldMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-unfold-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineUnfoldMoreElement.is, IconBaselineUnfoldMoreElement);

export default IconBaselineUnfoldMoreElement;
