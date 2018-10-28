import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMoreHorizElement
 * @class IconBaselineMoreHorizElement
 * @extends {AoflElement}
 */
class IconBaselineMoreHorizElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMoreHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-more-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMoreHorizElement.is, IconBaselineMoreHorizElement);

export default IconBaselineMoreHorizElement;
