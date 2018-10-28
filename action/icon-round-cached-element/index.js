import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCachedElement
 * @class IconRoundCachedElement
 * @extends {AoflElement}
 */
class IconRoundCachedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCachedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cached';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCachedElement.is, IconRoundCachedElement);

export default IconRoundCachedElement;
