import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGroupWorkElement
 * @class IconRoundGroupWorkElement
 * @extends {AoflElement}
 */
class IconRoundGroupWorkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGroupWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-group-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGroupWorkElement.is, IconRoundGroupWorkElement);

export default IconRoundGroupWorkElement;
