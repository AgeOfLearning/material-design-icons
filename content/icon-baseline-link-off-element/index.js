import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLinkOffElement
 * @class IconBaselineLinkOffElement
 * @extends {AoflElement}
 */
class IconBaselineLinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-link-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLinkOffElement.is, IconBaselineLinkOffElement);

export default IconBaselineLinkOffElement;
