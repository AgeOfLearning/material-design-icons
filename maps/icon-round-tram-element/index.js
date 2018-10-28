import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTramElement
 * @class IconRoundTramElement
 * @extends {AoflElement}
 */
class IconRoundTramElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTramElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tram';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTramElement.is, IconRoundTramElement);

export default IconRoundTramElement;
