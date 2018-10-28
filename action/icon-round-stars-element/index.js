import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStarsElement
 * @class IconRoundStarsElement
 * @extends {AoflElement}
 */
class IconRoundStarsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStarsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-stars';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStarsElement.is, IconRoundStarsElement);

export default IconRoundStarsElement;
