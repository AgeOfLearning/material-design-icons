import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPermMediaElement
 * @class IconRoundPermMediaElement
 * @extends {AoflElement}
 */
class IconRoundPermMediaElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPermMediaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-perm-media';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPermMediaElement.is, IconRoundPermMediaElement);

export default IconRoundPermMediaElement;
