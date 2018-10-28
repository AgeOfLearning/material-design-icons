import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLinkOffElement
 * @class IconRoundLinkOffElement
 * @extends {AoflElement}
 */
class IconRoundLinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-link-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLinkOffElement.is, IconRoundLinkOffElement);

export default IconRoundLinkOffElement;
