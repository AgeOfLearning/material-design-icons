import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLinkElement
 * @class IconBaselineLinkElement
 * @extends {AoflElement}
 */
class IconBaselineLinkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLinkElement.is, IconBaselineLinkElement);

export default IconBaselineLinkElement;
