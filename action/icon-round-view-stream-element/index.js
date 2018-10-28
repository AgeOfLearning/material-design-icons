import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewStreamElement
 * @class IconRoundViewStreamElement
 * @extends {AoflElement}
 */
class IconRoundViewStreamElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewStreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-stream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewStreamElement.is, IconRoundViewStreamElement);

export default IconRoundViewStreamElement;
