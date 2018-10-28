import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLooks6Element
 * @class IconBaselineLooks6Element
 * @extends {AoflElement}
 */
class IconBaselineLooks6Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineLooks6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-looks-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLooks6Element.is, IconBaselineLooks6Element);

export default IconBaselineLooks6Element;
