import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLooks3Element
 * @class IconBaselineLooks3Element
 * @extends {AoflElement}
 */
class IconBaselineLooks3Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineLooks3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-looks-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLooks3Element.is, IconBaselineLooks3Element);

export default IconBaselineLooks3Element;
