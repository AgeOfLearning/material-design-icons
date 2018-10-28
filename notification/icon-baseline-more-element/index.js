import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMoreElement
 * @class IconBaselineMoreElement
 * @extends {AoflElement}
 */
class IconBaselineMoreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMoreElement.is, IconBaselineMoreElement);

export default IconBaselineMoreElement;
