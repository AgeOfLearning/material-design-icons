import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundChildFriendlyElement
 * @class IconRoundChildFriendlyElement
 * @extends {AoflElement}
 */
class IconRoundChildFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundChildFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-child-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundChildFriendlyElement.is, IconRoundChildFriendlyElement);

export default IconRoundChildFriendlyElement;
