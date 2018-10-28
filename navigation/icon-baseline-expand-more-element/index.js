import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExpandMoreElement
 * @class IconBaselineExpandMoreElement
 * @extends {AoflElement}
 */
class IconBaselineExpandMoreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineExpandMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-expand-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExpandMoreElement.is, IconBaselineExpandMoreElement);

export default IconBaselineExpandMoreElement;
